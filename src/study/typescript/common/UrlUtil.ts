/**
 * @param pathname
 * @param orderNumber url을 /로 구분했을 때의 순서. 0번부터 시작
 * @example ("/news/list/1", 1) => "list"
 */
export function getPathDirectoryName(pathname: string, orderNumber: number): string {
    return pathname.split("/")[orderNumber + 1];
}
