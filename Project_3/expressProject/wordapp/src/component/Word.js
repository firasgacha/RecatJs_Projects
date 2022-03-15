import React,{Component} from 'react';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            words: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8080/api/word")
        .then(res => res.json())
        .then(
            (data)=>{
                this.setState({words: data,isLoaded:true});
            },
            (error) =>{
                this.setState({isLoaded:true,error});
            }
        )
    }
    render() {
        const {error,isLoaded,words} = this.state;
        if(error){
            return <div>Error : {error.message}</div>
        }else if(!isLoaded) {
            return <div>Still Loading... </div>
        }else{
            return(
                <ul>
                    {words.map((s) => ((
                        <li>{s.Word}:: {s.def}</li>
                    )))}
                </ul>
            );
        }
    }
}

export default Word;