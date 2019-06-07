import React from 'react';
import { connect } from 'react-redux';
import { getAllSchools } from '../actions/schoolsAction';

class AllSchools extends React.Component {
  state = {
    search: ''
  }

  componentDidMount() {
    this.props.getAllSchools();
  }

  render () {
    console.log(this.props.allSchools);
    
    return (
      <div>
        <p>OUR SCHOOLS</p>
        {this.props.allSchools.map(school => {
          return (
            <div key={`${school.id}`}>
              <p>{`${school.schoolname}`}</p>
                <img style={{width:200, height:200}} src={`${school.image}`} alt={`${school.schoolname}`} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allSchools: state.schoolsReducer.schools,
    fetching: state.schoolsReducer.fetchingSchools,
  };
}

export default connect(
  mapStateToProps,
  { getAllSchools }
) (AllSchools);