class App extends React.Component{
    constructor(){
        super();
        this.state={
            isLogged:true,
            details:[
                {id:1,name:"Bhargavi",age:20},
                {id:2,name:"Jahnavi",age:19},
                {id:3,name:"Vyshnavi",age:22}
            ]
        }
    }
    render(){
        return(
            <div>
            {(this.state.isLogged) && this.state.details.map(detail=>(
                <div key={detail.id} className="person">
                    <h1>{detail.name}</h1>
                    <p>age:{detail.age}</p>
                </div>
            ))}
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));