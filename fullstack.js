const data = 
[
    {
    id: 1, name: 'Prof', content: 'this is the best programmer on planet earth!', image: "https://ca.slack-edge.com/T024FPYBQ-U07DRD24A-g120f32133d9-512", 
    },
    {
    id: 3, name: 'Nick', content: 'this is the best programmer on planet earth!', image: "https://ca.slack-edge.com/T024FPYBQ-U011MAJUFGF-416e7ebf386b-512"
    },
    {
    id: 5, name: 'Thompson', content: 'this is the best programmer on planet earth!', image: "https://ca.slack-edge.com/T024FPYBQ-UN10LGMLJ-8eb984757e4a-512"
    }

    
];

const list = () => {
    return [...data]

}; 

const find = (id) => {
    const person = data.find(person => person.id === +id)
    console.log(person);
    
    return {...person}
}

module.exports = {list: list, find: find}

