/** 静态切图：放在 `public/assets/` 下，构建后与开发环境路径一致 */
export function asset(filename: string): string {
  return `${import.meta.env.BASE_URL}assets/${filename}`;
}
