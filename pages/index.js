import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;

    @media screen and (max-width: 500px){
        margin: auto;
        padding: 15px;
    }
`;

export default function Home() {
  return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>ReactJS Quiz</h1>
            </Widget.Header>

            <Widget.Content>
              <p>Teste</p>
            </Widget.Content>

          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/edsonjaguiar"/>
      </QuizBackground>
  )
}
