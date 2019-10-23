import React, {Component} from 'react';
import firebase from '../../firebase';
import './home.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            posts:[]
        };
    }
    componentDidMount(){
        firebase.app.ref('posts').once('value', (snapshot) =>{
            let state = this.state;
            state.posts =[];

            snapshot.forEach(element => {
                state.posts.push({
                    key:element.key,
                    titulo: element.val().titulo,
                    image: element.val().image,
                    descricao:element.val().descricao,
                    autor:element.val().autor
                });
            });
            this.setState(state);
        });
    }
    render(){
        return(
            <section id="home-post">
                {this.state.posts.map(post=>{
                    return(
                        <article key={post.key}>
                            <header>
                                <div className="home-title">
                                    <strong>{post.titulo}</strong>
                                    <span>{post.autor}</span>
                                </div>
                            </header>
                            <img src={post.image} alt='Capa do post'/>
                            <footer>
                                <p>{post.descricao}</p>
                            </footer>
                        </article>
                    );
                })}
            </section>
        );
    }
}

export default Home;
