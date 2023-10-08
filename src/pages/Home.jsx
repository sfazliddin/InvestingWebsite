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
        Facts. Jokes. Conversion. More.
      </h3>
      <h3>What's This Website About?</h3>
      <h4>
        <b>API Fun-</b> Enjoy the API's I found that you can have some fun
        playing around with or get something informational
      </h4>
      <ul>
        <li>
          <b>
            <a href="/numbers-facts">Number Facts:</a>
          </b>{" "}
          In this section of the website, you can get Trivia or Math facts about
          a number, or facts about a Date or Year.
        </li>
        <li>
          <b>
            *<a href="/text2speech">Text to Speech:</a>
          </b>{" "}
          Input text to get verbal representation of a textual content.
        </li>
        <li>
          <b>
            *<a href="/chuck-norris">Chuck Norris:</a>
          </b>{" "}
          In this section you can get facts or jokes about the Legendary Chuck
          Norris.
        </li>
        <li>
          <b>
            *<a href="urban-dictionary">Urban Dictionary:</a>
          </b>{" "}
          Get the translation of modern vocabulary.
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
