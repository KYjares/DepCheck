import "./Styles/Dashboard.css";
import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "./Session";
import { compose } from "recompose";
import { withFirebase } from "./Firebase";
import { db, firebase } from "./Firebase/firebase";
import "./Styles/Account.css";
import { withRouter, Link } from "react-router-dom";
import withBase from "./withBase";
import Sidebar from "./Sidebar";
import getTweet from "./Backend/GetTweet";

import happy from "../assets/emotion/1.png";
import smile from "../assets/emotion/2.png";
import neutral from "../assets/emotion/3.png";
import frown from "../assets/emotion/4.png";
import sad from "../assets/emotion/5.png";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";

const data = [
  {
    name: "1",
    days: 5,
    amt: 2400
  },
  {
    name: "2",
    days: 8,
    amt: 2210
  },
  {
    name: "3",
    days: 7,
    amt: 2290
  },
  {
    name: "4",
    days: 11,
    amt: 2000
  },
  {
    name: "5",
    days: 14,
    amt: 2181
  },
  {
    name: "6",
    days: 10,
    amt: 2500
  },
  {
    name: "7",
    days: 15,
    amt: 2100
  }
];

const data1 = [
  { name: "name", value: 25 },
  { name: "other", value: 75 }
];
const COLORS = ["#ffffff", "#afdcca"];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moodValue: 1.5,
      display: "",
      tweets: [],
      tweets1: [],
      tweets2: [],
      tweets3: [],
      tweets4: [],
      tweets5: [],
      tweets6: [],
      tweets7: [],
      tweets8: [],
      tweets9: [],
      tweets11: [],
      tweets10: [],
      tweets12: [],
      tweets13: [],
      tweets14: []
    };

    this.getTwoWeeksTweets = this.getTwoWeeksTweets.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ display: user.displayName });
      } else {
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }

  getTwoWeeksTweets = () => {
    let tweets1 = [];
    let tweets2 = [];
    let tweets3 = [];
    let tweets4 = [];
    let tweets5 = [];
    let tweets6 = [];
    let tweets7 = [];
    let tweets8 = [];
    let tweets9 = [];
    let tweets10 = [];
    let tweets11 = [];
    let tweets12 = [];
    let tweets13 = [];
    let tweets14 = [];

    let dateNow = new Date();
    dateNow.setHours(0, 0, 0, 0);

    let dateBefore = new Date();
    dateBefore.setDate(dateBefore.getDate() - 14);
    dateBefore.setHours(0, 0, 0, 0);

    let day1 = new Date();
    day1.setDate(day1.getDate() - 13);
    day1.setHours(0, 0, 0, 0);
    let day2 = new Date();
    day2.setDate(day2.getDate() - 12);
    day2.setHours(0, 0, 0, 0);
    let day3 = new Date();
    day3.setDate(day3.getDate() - 11);
    day3.setHours(0, 0, 0, 0);
    let day4 = new Date();
    day4.setDate(day4.getDate() - 10);
    day4.setHours(0, 0, 0, 0);
    let day5 = new Date();
    day5.setDate(day5.getDate() - 9);
    day5.setHours(0, 0, 0, 0);
    let day6 = new Date();
    day6.setDate(day6.getDate() - 8);
    day6.setHours(0, 0, 0, 0);
    let day7 = new Date();
    day7.setDate(day7.getDate() - 7);
    day7.setHours(0, 0, 0, 0);
    let day8 = new Date();
    day8.setDate(day8.getDate() - 6);
    day8.setHours(0, 0, 0, 0);
    let day9 = new Date();
    day9.setDate(day9.getDate() - 5);
    day9.setHours(0, 0, 0, 0);
    let day10 = new Date();
    day10.setDate(day10.getDate() - 4);
    day10.setHours(0, 0, 0, 0);
    let day11 = new Date();
    day11.setDate(day11.getDate() - 3);
    day11.setHours(0, 0, 0, 0);
    let day12 = new Date();
    day12.setDate(day12.getDate() - 2);
    day12.setHours(0, 0, 0, 0);
    let day13 = new Date();
    day13.setDate(day13.getDate() - 1);
    day13.setHours(0, 0, 0, 0);
    let day14 = new Date();
    day14.setHours(0, 0, 0, 0);

    function sameDay(d1, d2) {
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      );
    }

    for (let i = 0; i < this.state.tweets.length; i++) {
      let dateOfTweet = new Date(this.state.tweets[i]["date"]);
      dateOfTweet.setHours(0, 0, 0, 0);
      // console.log(dateOfTweet)
      // console.log(day14)
      if (dateOfTweet <= dateNow && dateOfTweet >= dateBefore) {
        // console.log(this.state.tweets[i]["text"])
        console.log(dateOfTweet);
        console.log(sameDay(day14, dateOfTweet));

        if (sameDay(day1, dateOfTweet)) {
          tweets1.push(this.state.tweets[i].text);
        }
        if (sameDay(day2, dateOfTweet)) {
          tweets2.push(this.state.tweets[i].text);
        }
        if (sameDay(day3, dateOfTweet)) {
          console.log("tweets1");
          tweets3.push(this.state.tweets[i].text);
        }
        if (sameDay(day4, dateOfTweet)) {
          console.log("tweets1");
          tweets4.push(this.state.tweets[i].text);
        }
        if (sameDay(day5, dateOfTweet)) {
          console.log("tweets1");
          tweets5.push(this.state.tweets[i].text);
        }
        if (sameDay(day6, dateOfTweet)) {
          console.log("tweets1");
          tweets6.push(this.state.tweets[i].text);
        }
        if (sameDay(day7, dateOfTweet)) {
          console.log("tweets1");
          tweets7.push(this.state.tweets[i].text);
        }
        if (sameDay(day8, dateOfTweet)) {
          console.log("tweets1");
          tweets8.push(this.state.tweets[i].text);
        }
        if (sameDay(day9, dateOfTweet)) {
          console.log("tweets1");
          tweets9.push(this.state.tweets[i].text);
        }
        if (sameDay(day10, dateOfTweet)) {
          console.log("tweets1");
          tweets10.push(this.state.tweets[i].text);
        }
        if (sameDay(day11, dateOfTweet)) {
          console.log("tweets1");
          tweets11.push(this.state.tweets[i].text);
        }
        if (sameDay(day12, dateOfTweet)) {
          console.log("tweets1");
          tweets12.push(this.state.tweets[i].text);
        }
        if (sameDay(day13, dateOfTweet)) {
          console.log("tweets1");
          tweets13.push(this.state.tweets[i].text);
        }
        if (sameDay(day14, dateOfTweet)) {
          console.log("tweets1");
          tweets14.push(this.state.tweets[i].text);
        }
      }
    }

    this.setState({
      tweets1,
      tweets2,
      tweets3,
      tweets4,
      tweets5,
      tweets6,
      tweets7,
      tweets8,
      tweets9,
      tweets10,
      tweets11,
      tweets12,
      tweets13,
      tweets14
    });
  };

  imageSet = () => {
    const { moodValue } = this.state;

    if (moodValue >= 1 && moodValue < 1.5) {
      return happy;
    } else if (moodValue >= 1.5 && moodValue < 2.5) {
      return neutral;
    } else if (moodValue >= 2.5 && moodValue < 3.5) {
      return frown;
    } else if (moodValue >= 3.5) {
      return sad;
    }
  };

  enhancerSet = () => {
    const { moodValue } = this.state;

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

    if (moodValue >= 1 && moodValue < 1.5) {
      return normal;
    } else if (moodValue >= 1.5 && moodValue < 2.5) {
      return mild[Math.floor(Math.random() * mild.length)];
    } else if (moodValue >= 2.5 && moodValue < 3.5) {
      return moderate[Math.floor(Math.random() * mild.length)];
    } else if (moodValue >= 3.5) {
      return extreme;
    }
  };

  render() {
    return (
      <div id="dashboardPage">
        <Sidebar />
        <div className="flexNav">
          <p id="currentPage">Dashboard</p>
          <p id="user">
            <b>Logged in as {this.state.display}</b>
          </p>
          <p id="logout">
            <b>
              <Link to={ROUTES.LOGIN} onClick={firebase.doSignOut}>
                Logout
              </Link>
            </b>
          </p>
        </div>
        <body id="dashboardContent">
          <div className="top">
            <div id="moodAnalysis" className="analysisContainer">
              <p className="header">
                <b>Mood Analysis</b>
              </p>
              <img id="emotion" src={this.imageSet()} alt="Friends"></img>
            </div>

            {/* <div id="stackContainers">
              <div id="moodStatus" className="container">
                <p className="rightHeader">
                  <b>Mood Status</b>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque orci erat, ullamcorper vulputate pellentesque
                  quis, lacinia ultricies erat. Aliquam viverra ut arcu quis
                  pulvinar. Phasellus ac sollicitudin tellus. Nam in nisl
                  turpis. Cras non dapibus urna. Mauris cursus orci vel ex
                  commodo pretium. Donec pellentesque hendrerit hendrerit. Nunc
                  tincidunt, dui a molestie rhoncus, tortor diam condimentum
                  velit, non pretium tellus leo et elit. Fusce diam erat, cursus
                  tempus feugiat eu, mollis nec arcu. Aliquam maximus efficitur
                  ex, ullamcorper pulvinar sem porta quis. In hac habitasse
                  platea dictumst. Morbi pellentesque libero ante, eget laoreet
                  lectus vulputate eu. Aenean a accumsan ante. Nunc id pharetra
                  leo, non imperdiet libero.
                </p>
              </div>

              <br /> */}
            <div id="moodEnhancers" className="container">
              <p className="rightHeader">
                <b>Mood Enhancers</b>
              </p>
              <p className="text">{this.enhancerSet()}</p>
            </div>
          </div>
          {/* </div> */}
          <div id="bottom">
            {" "}
            <div id="moodClimate" className="climateContainer">
              <p className="moodClimate-header">
                <b>Mood Climate</b>
              </p>
              <div id="lineGraph">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart
                    data={data}
                    margin={{
                      top: 30,
                      right: 30,
                      left: 20
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />

                    <Line
                      type="monotone"
                      dataKey="days"
                      stroke="#82ca9d"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

const WrappedDashboard = compose(withBase, withRouter, withFirebase)(Dashboard);

export default WrappedDashboard;
