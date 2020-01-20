export class ColorSave {
    private readonly storageKey: string;
    public readonly colorList: Array<string>;
    length = 0;

    constructor(storageKey: string) {

        if (!storageKey)
            throw Error("유효하지 않은 storage key 입니다.");

        this.storageKey = storageKey;
        this.colorList = <Array<string>>JSON.parse(<string>localStorage.getItem(storageKey)) || [];
    }

    push(background: string): number {

        this.colorList.push(background);
        this.synchronize();
        return this.length;
    }

    clear() {

        this.colorList.splice(0, this.length);
        this.synchronize();
    }

    remove(index: number) {

        let removeValue = this.colorList.splice(index, 1);
        this.synchronize();
        return removeValue;
    }

    private synchronize() {
        this.length = this.colorList.length;
        localStorage.setItem(this.storageKey, JSON.stringify(this.colorList));
    }
}

export const COLOR_LIST_ENUM = {SECTION_BACKGROUND_LIST: "sectionColorList"};

export const sectionBackground: ColorSave = new ColorSave(COLOR_LIST_ENUM.SECTION_BACKGROUND_LIST);

/*
1. 페이지 로딩되면 localStorage에서 저장된 모든 배경화면 가져와서 배열에 저장.
>> 해당 배열은 const로 선언하고, export하여 모든페이지에서 import할 수 있도록.

2. Update는 필요없고, CRD만 있으면 됨.

>> 추후에 listView로 보여주고 CRD하는 Page를 개발해야 하겠지만,
현재는 우선 변수에 CRD가 되는지, 페이지 다시 띄워도 유지되는지 구현부터 해야함.
*/
