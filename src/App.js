import React from "react";

const App = () => {
  return (
    <section className="sass">
      <h1 className="sass__title">
        Working with SASS <br /> and setting up Reusable Styles
      </h1>
      <p className="sass__info-text">
        Objective: Getting familiar with SASS and setting up some reusable
        styles using key features of the SASS.
      </p>
      <div className="sass__key-features-wrapper">
        <button className="sass__key-feature">variables</button>
        <button className="sass__key-feature">partials</button>
        <button className="sass__key-feature">functions</button>
        <button className="sass__key-feature">mixins</button>
        <button className="sass__key-feature">Nested Rules</button>
        <button className="sass__key-feature">maps</button>
        <button className="sass__key-feature">loops</button>
        <button className="sass__key-feature">condtionals</button>
        <button className="sass__key-feature">parent selectors</button>
        <button className="sass__key-feature">project structuring</button>
      </div>
      <section className="sass__testing">
        <h3 className="sass__testing-title">Testing few features</h3>
      </section>
      <div className="sass__flex-wrapper">
        <div className="sass__flex-div">flex item</div>
        <div className="sass__flex-div">flex item</div>
        <div className="sass__flex-div">flex item</div>
      </div>

      <article className="sass__card">
        <p className="sass__card-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          corporis quaerat incidunt. Ullam aliquam eos neque, architecto ducimus
          temporibus id aliquid quae harum at voluptates, consequuntur iure,
          molestiae dolore ea?
        </p>
      </article>
      <div className="sass__grid-wrapper">
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
        <div className="sass__grid-item">grid item</div>
      </div>
      <ul className="sass__list">
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <div className="sass__btn-wrapper">
        <button className="sass__btn-bg">button bg</button>
        <button className="sass__btn-border">button border</button>
      </div>
    </section>
  );
};

export default App;
