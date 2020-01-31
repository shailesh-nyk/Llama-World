import React, { Component } from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './../quiz';
import  Container  from 'react-bootstrap/Container';
class QuizComponent extends Component {

    render() {
        return (
            <Container className='pt-2 d-flex justify-content-center'>
                <Quiz quiz={quiz} continueTillCorrect={false} shuffle={true}/>
            </Container>
            
        )
    }
}

export default QuizComponent