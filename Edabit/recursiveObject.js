let tree = {
    'name':'Manoj',
    'children':[{
        'name':'Umesh',
        'children':[{
            'name':'Dev',
            'children':[]
            },
            {
            'name':'Suraj',
            'children':[{
                'name':'Suraj jr',
                'children':[]
                }]
            }]
    },
        {
        'name':'Pradeep',
        'children':[{
            'name':'Rudu',
            'children':[]
        }]
    }]
}



let familyTree = (object) => {
    object.children.forEach(child => {
        console.log(child.name) 
        familyTree(child)
    })
}


familyTree(tree)