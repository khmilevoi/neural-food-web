export type PickString<Keys extends string, Pick extends Keys> = {
    [k in Pick]: k;
}[Pick];
