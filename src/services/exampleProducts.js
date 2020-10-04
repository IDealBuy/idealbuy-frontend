export const exampleProducts = [
    {
        id: 1,
        name: "Huevo",
        description: "lorem ipsum huevo",
        photo: "https://i.blogs.es/7e0cae/huevo-instagram/450_1000.jpg",
        prices: {
            walmart: {
                price: '10.00'
            },
            soriana: {
                price: '11.00'
            },
            chedrahui: {
                price: '12.00'
            },
            cmexicana: {
                price: '13.00'
            },
        },
        active: true
    },
    {
        id: 2,
        name: "Leche",
        description: "lorem ipsum leche",
        photo: "https://previews.123rf.com/images/maxxyustas/maxxyustas1609/maxxyustas160900016/64134010-la-leche-o-el-envase-de-cart%C3%B3n-en-blanco-juiice-aislado-en-blanco-3d-ilustraci%C3%B3n.jpg",
        prices: {
            walmart: {
                price: '20.00'
            },
            soriana: {
                price: '31.00'
            },
            chedrahui: {
                price: '4.00'
            },
            cmexicana: {
                price: '3.00'
            },
        },
        active: true
    },
    {
        id: 3,
        name: "Queso",
        description: "lorem ipsum queso",
        photo: "data:image/jpeg;base64,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",
        prices: {
            walmart: {
                price: '100.09'
            },
            soriana: {
                price: '100.00'
            },
            chedrahui: {
                price: '12.00'
            },
            cmexicana: {
                price: '63.00'
            },
        },
        active: true
    }
]