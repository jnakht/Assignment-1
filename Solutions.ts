


function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}



function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[] {
    const newItems = items.filter(item => item.rating >= 4);
    return newItems;
}


const books = [
    {title: 'book1', rating: 4.5},
    {title: 'book2', rating: 5},
    {title: 'book3', rating: 3.9},
    {title: 'book4', rating: 4},
    {title: 'book4', rating: 2.5},

]
console.log(filterByRating(books));


