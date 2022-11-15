export class Fractal {
  size: number;
  width: number;
  height: number;
  lineWidth: number;
  sides: number;
  scale: number;
  angle: number;
  maxDeept: number;
  branches: number;
  color: string;

  constructor(
    width: number,
    height: number,
    lineWidth: number = 10,
    sides: number = 3,
    scale: number = 0.5,
    angle: number = 1,
    maxDeept: number = 4,
    branches: number = 2,
    color: string = 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
  ) {
    this.width = width;
    this.height = height;
    this.size = (this.width > this.height) ? this.height * 0.25 : this.width * 0.25;
    this.lineWidth = lineWidth;
    this.sides = sides;
    this.scale = scale;
    this.angle = angle;
    this.maxDeept = maxDeept;
    this.branches = branches;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = 'gold';
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = 'round';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.clearRect(0, 0, this.width, this.height);
    this.drawFractal(ctx);
  }

  private drawFractal(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.strokeStyle = this.color
      ctx.translate(this.width / 2, this.height / 2);
      ctx.scale(1, 1);
      ctx.rotate(0);
      for (let i = 0; i < this.sides; i++) {
          ctx.rotate((Math.PI * 2) / this.sides)
          this.drawBranch(ctx, 0);
      }
      ctx.restore();
  }

  private drawBranch(ctx: CanvasRenderingContext2D, deept: number) {
    if (deept > this.maxDeept) return;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.size, 0);
    ctx.stroke();
    for (let i = 0; i < this.branches; i++) {
        ctx.save();
        ctx.translate(this.size - (this.size / this.branches) * i, 0);
        ctx.scale(this.scale, this.scale);

        ctx.save();
        ctx.rotate(this.angle);
        this.drawBranch(ctx, deept + 1);
        ctx.restore();

        ctx.save();
        ctx.rotate(-this.angle);
        this.drawBranch(ctx, deept + 1);
        ctx.restore();

        ctx.restore();
    }
  }
}
