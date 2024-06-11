

export const sorter = (items: number[]) => {
    const sortedItems = items.sort((a: number, b:number) => b - a ? a : b)
    console.log(sortedItems)
    return sortedItems
}