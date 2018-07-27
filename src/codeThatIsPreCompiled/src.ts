export const enum TEST {
    MAJOR = "major",
    MINOR = "minor"
}

interface IMajorKey {
    key: TEST.MAJOR;
}
interface IMinorKey {
    key: TEST.MINOR;
    attributeOnlyOnMinorKey: string;
}

export type Song = IMajorKey|IMinorKey;


export const test = () => "test";