const quiz = [
  {
    question: 'DevilistDのVALORANTで最も使用するエージェントは次の内どれ？(パッチ4.07現在)',
    answers: ['ソーヴァ', 'チェンバー', 'セージ', 'レイズ'],
    correct: 'ソーヴァ'
  }, {
    question: 'DevilistDのVALORANT最高ランクは次の内どれ？',
    answers: ['プラチナ3', 'ダイヤ1', 'ダイヤ2', 'ダイヤ3'],
    correct: 'ダイヤ2'
  }, {
    question: 'DevilistDのVALORANTで一番使う武器は次の内どれ？',
    answers: ['ファントム', 'ヴァンダル', 'オーディン', 'オペレーター'],
    correct: 'ヴァンダル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了！\nあなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  buttonIndex++;
}
