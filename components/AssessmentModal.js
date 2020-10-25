import React, { Component } from "react";
import "./Styles/AssessmentModal.css";

import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import happy from "../assets/emotion/1.png";

import neutral from "../assets/emotion/3.png";
import frown from "../assets/emotion/4.png";
import sad from "../assets/emotion/5.png";

class Assessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setOpen: false,
      show: false,
      display: "",
      questions: {
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
        question6: 0,
        question7: 0,
        question8: 0,
        question9: 0,
        question10: 0
      },
      depressionLevel: 0,
      depressionCategory: ""
    };
  }

  onSubmit = () => {
    this.calculateDepressionRisk();
  };

  onChangeQuestion1 = event => {
    var questions = { ...this.state.questions };
    questions.question1 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion2 = event => {
    var questions = { ...this.state.questions };
    questions.question2 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion3 = event => {
    var questions = { ...this.state.questions };
    questions.question3 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion4 = event => {
    var questions = { ...this.state.questions };
    questions.question4 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion5 = event => {
    var questions = { ...this.state.questions };
    questions.question5 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion6 = event => {
    var questions = { ...this.state.questions };
    questions.question6 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion7 = event => {
    var questions = { ...this.state.questions };
    questions.question7 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion8 = event => {
    var questions = { ...this.state.questions };
    questions.question8 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion9 = event => {
    var questions = { ...this.state.questions };
    questions.question9 = event.target.value;
    this.setState({ questions });
  };

  onChangeQuestion10 = event => {
    var questions = { ...this.state.questions };
    questions.question10 = event.target.value;
    this.setState({ questions });
  };

  calculateDepressionRisk = event => {
    let risk = ["None", "Mild", "Moderate", "Severe"];
    var questions = { ...this.state.questions };
    var level =
      parseInt(questions.question1) +
      parseInt(questions.question2) +
      parseInt(questions.question3) +
      parseInt(questions.question4) +
      parseInt(questions.question5) +
      parseInt(questions.question6) +
      parseInt(questions.question7) +
      parseInt(questions.question8) +
      parseInt(questions.question9) +
      parseInt(questions.question10);

    this.setState({ depressionLevel: level });
  };

  imageSet(lvl) {
    if (lvl <= 4) {
      return happy;
    } else if (lvl >= 5 && lvl < 10) {
      return neutral;
    } else if (lvl >= 10 && lvl < 20) {
      return frown;
    } else if (lvl >= 20) {
      return sad;
    }
  }

  enhancerSet = lvl => {
    var normal = "You are doing great! Keep up the good job.";
    var mild = [
      "Have some Food Trip. Foods can help tame stress in several ways. Comfort foods, like a bowl of warm oatmeal, boost levels of serotonin, a calming brain chemical. Other foods can cut levels of cortisol and adrenaline, stress hormones that take a toll on the body over time.",
      "Have some sugar rush. Sweet delicacy may decrease the production of the stress-related hormone glucocorticoid",
      "Release some sweats. Exercising has been shown to decrease overall levels of tension, elevate and stabilize mood, improve sleep, and improve self-esteem",
      "Laughter is the best medicine. A good laugh has great short and long term effects. When you start to laugh, it doesn't just lighten your load mentally, it actually induces physical changes in your body",
      "Watch a movie. Your brain is tightened when it is stressed, so watching a movie will loosen it for a couple of hours. Funny movies also make you laugh which relieves stress and loosens your brain allowing you to think without stress blocking the way of your thoughts",
      "Listen to a song. Listening to music can have a tremendously relaxing effect on our minds and bodies, especially slow, quiet classical music. This type of music can have a beneficial effect on our physiological functions, slowing the pulse and heart rate, lowering blood pressure, and decreasing the levels of stress hormones.",
      "Dress up! What you wear definitely impacts your mood so wear something that can boost your confidence. Try to wear comfortable clothes with calming colors.",
      "Pop some bubbles. Chewing gum during stressful times has been found to help alertness, reduce anxiety, and reduce stress and salivary cortisol levels. If you are feeling stressed, a piece of gum can help soothe your nerves and give your mouth something to do",
      "Smile! Holding a smile on one’s face during periods of stress may help the heart. smiling not only signals happiness to others but could also be a way to help cope with life stresses",
      "Get as much sleep as you can. A single night’s sleep, or even a nice nap, can make a world of difference to the way we feel.",
      "Sipping a warm cup of coffee or your favorite herbal tea in the morning or in the middle of the day or even in the evening can be a relaxing ritual"
    ];
    var moderate = [
      "Buying yourself a little something may help to boost your mood",
      "Time to talk to your trusted friend this will help you to relieve some of your pent-up feelings. Our loved ones may also give us new perspectives that change the way we perceive the source of the stress",
      "Take a 5-minute meditation. This activity is a great stress reducer that can calm you and bring relaxation. Calming meditation can help you sleep better, focus better at work, and remain calm throughout the day.",
      "	Fight off negative thoughts. Make a list of all the positive things about you and your life (you may need help with this), keep it in your bag or wallet, and read it to yourself every morning, or even every few hours",
      "	Fight off negative thoughts. Make a list of all the positive things about you and your life (you may need help with this), keep it in your bag or wallet, and read it to yourself every morning, or even every few hours",
      "Have some time with nature. Bright daylight, fresh air, and the hustle-bustle of everyday life can all be helpful, as can the sights, sounds, and smells of nature",
      "Talk to a stranger. The mood boost of talking to strangers may seem fleeting but even chatting with a stranger in an elevator can make a difference.",
      "Install some stress reliever related app. This may provide a valuable separate or complementary option for tackling depressive symptoms."
    ];
    var extreme =
      "We advised you to seek help from health professional advice as you may be entering severe depression episode";

    if (lvl <= 4) {
      return normal;
    } else if (lvl >= 5 && lvl < 10) {
      return mild[Math.floor(Math.random() * mild.length)];
    } else if (lvl >= 10 && lvl < 20) {
      return moderate[Math.floor(Math.random() * mild.length)];
    } else if (lvl >= 20) {
      return extreme;
    }
  };

  render() {
    const handleClickOpen = () => {
      this.setState({ setOpen: true });
      this.calculateDepressionRisk();
    };

    const handleClose = () => {
      this.setState({ setOpen: false });
      this.props.handleClose();
    };

    const questionList = [
      {
        id: 1,
        question: "Slight loss of interest or pleasure in doing things?",
        change: this.onChangeQuestion1
      },
      {
        id: 2,
        question: "Feeling sad, down or hopeless?",
        change: this.onChangeQuestion2
      },
      {
        id: 3,
        question: "Trouble falling or staying asleep, or sleeping too much?",
        change: this.onChangeQuestion3
      },
      {
        id: 4,
        question: "Feeling tired or increased fatigue?",
        change: this.onChangeQuestion4
      },
      {
        id: 5,
        question: "Changes in appetite - poor appetite or overeating?",
        change: this.onChangeQuestion5
      },
      {
        id: 6,
        question:
          "Feeling worthless, guilty or that you are a failure or have let yourself or your family down?",
        change: this.onChangeQuestion6
      },
      {
        id: 7,
        question: "Trouble concentrating or thinking on things?",
        change: this.onChangeQuestion7
      },
      {
        id: 8,
        question:
          "Moving or speaking so slowly that other people could have noticed?",
        change: this.onChangeQuestion8
      },
      {
        id: 9,
        question:
          "Thoughts that you would be better off dead, hurting yourself in some way?",
        change: this.onChangeQuestion9
      },
      {
        id: 10,
        question:
          "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
        change: this.onChangeQuestion10
      }
    ];

    const listQuestions = questionList.map(question => (
      <div id="questionItem">
        <div className="questionNumber">Question {question.id}</div>
        <div className="question">{question.question}</div>
        <form className="answerForm">
          <div id="answers">
            <div id="answerItem">
              <label id="answer" class="first">
                <input
                  type="radio"
                  name="toggle"
                  value="0"
                  onChange={question.change}
                />
                <span>Not at all</span>
              </label>
            </div>
            <div id="answerItem">
              <label id="answer" class="middle">
                <input
                  type="radio"
                  name="toggle"
                  value="1"
                  onChange={question.change}
                />
                <span>Several Days</span>
              </label>
            </div>
            <div id="answerItem">
              <label id="answer" class="middle">
                <input
                  type="radio"
                  name="toggle"
                  value="2"
                  onChange={question.change}
                />
                <span>More than half the days</span>
              </label>
            </div>
            <div id="answerItem">
              <label id="answer" class="last">
                <input
                  type="radio"
                  name="toggle"
                  value="3"
                  onChange={question.change}
                />
                <span>Nearly every day</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    ));

    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div>
            {/* <img
              src={require("../assets/modalClose.png")}
              id="closeButton"
              alt="close"
              onClick={this.props.handleClose}
            ></img> */}
            <body>
              <div>
                <div className="containerElements">
                  <div id="title">
                    <p id="titleText">Depression Assessment Questionnaire</p>
                  </div>
                  {listQuestions}
                  <Button
                    className="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                  >
                    Submit Form
                  </Button>

                  <Dialog
                    open={this.state.setOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={"md"}
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Questionnaire Results"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <div id="results">
                          <img
                            id="emotionResult"
                            src={this.imageSet(this.state.depressionLevel)}
                            alt="Friends"
                          ></img>
                          <div id="moodEnhancersResult" className="container">
                            <p className="rightHeader">
                              <b>Mood Enhancers</b>
                            </p>
                            <p className="text">
                              {this.enhancerSet(this.state.depressionLevel)}
                            </p>
                          </div>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </body>
          </div>
          <Button
            onClick={this.props.handleClose}
            color="primary"
            className="submit"
            autoFocus
          >
            Close
          </Button>
        </section>
      </div>
    );
  }
}

export default Assessment;
