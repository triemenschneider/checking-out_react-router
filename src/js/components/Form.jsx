import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userimages: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const username = this.input.value;
    const userimage = 'https://github.com/' + username + '.png?size=200';

    console.log(userimage);

    this.setState({ userimages: [...this.state.userimages, userimage] }, () => {
      console.log('state was updated');
      console.log(this.state.userimages);
    });
  }

  handleClear() {
    this.setState({ userimages: [] });
  }

  render() {
    const images = this.state.userimages.map(image => (
      <img key={image} src={image} alt="" />
    ));

    return (
      <div className="form">
        <div className="form-left">
          <h2>Fancy&nbsp;React&nbsp;Form</h2>
          <p>Jetzt geht's ab mit fancy react-form magic.</p>

          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="github username"
              type="text"
              ref={input => (this.input = input)}
            />
            <button className="button" type="submit">
              submit
            </button>
          </form>
          <button className="button" onClick={this.handleClear}>
            clear
          </button>
        </div>
        <div className="form-right">
          <div className="git-avatar">
            <ReactCSSTransitionGroup
              transitionName="jo"
              transitionEnterTimeout={700}
              transitionLeaveTimeout={500}
            >
              {images}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

// mach hier mal propTypes hin, kollege!!

export default Form;
