
import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  url = 'https://cs4550-bk610-node-server.herokuapp.com/api/quiz';

  submitQuiz =  quiz =>
    fetch(this.url + '/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json())
  createQuiz(quiz) {}
  findAllQuizzes = () =>
    fetch(this.url + '/quiz')
      .then(response => response.json())
  findQuizById = quizId =>
    fetch(this.url + '/quiz/' + quizId)
      .then(response => response.json())
  updateQuiz(quizId, quiz) {}
  deleteQuiz(quizId) {}
}
