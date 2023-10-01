/* eslint-disable react/no-unescaped-entities */

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>
          <b>Welcome to API Fun </b>
        </h1>
      </div>
      <h3 className="d-flex justify-content-center">
        Facts. Statistics. Weather. More.
      </h3>
      <h3>What's This Website About?</h3>
      <ul>
        <li>
          <b>API Fun:</b> Enjoy the API's I found to either get Facts about
          numbers or NBA Statistics, weather information, and anything else I've
          added.
        </li>
        <li>
          <a href="/numbers-facts">
            <b>Number Facts:</b>
          </a>
          In this section of the website, you can get Trivia or Math facts about
          a number, or facts about a Date or Year.
        </li>
        <li>
          <b>NBA Stats*:</b> In this section you can get season or all time
          statistics about the NBA whether it is related to a player or team.
        </li>
        <li>
          <b>Weather*:</b> Get weather data where you are located or anywhere
          else in the world. You can get history of weather data in a specific
          area.
        </li>
        {/* <li>
          <b>User-Friendly Interface:</b> Our platform is intuitive and easy to
          use, making it suitable for traders of all levels.
        </li> */}
      </ul>

      <small>*Page is not available yet</small>
    </>
  );
};
export default Home;
