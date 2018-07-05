
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import Auth from '../../lib/Auth';


import SortFilterBar from './SortFilterBar';
import Map from '../common/Map';

class JobsIndex extends React.Component {
  state = {
    jobs: [],
    search: '',
    sort: 'title|asc'
  }

  componentDidMount() {
    axios.get('/api/jobs')
      .then(res => this.setState({ jobs: res.data }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  sortedFilteredJobs = () => {
    const [field, dir] = this.state.sort.split('|');
    const re = new RegExp(this.state.search, 'i');
    const filtered = _.filter(this.state.jobs, job => {
      return re.test(job.title);
    });
    return _.orderBy(filtered, field, dir);
  }

  showListView = () => this.setState({ listView: true });
  hideListView = () => this.setState({ listView: false });

  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="columns is-multiline ">
          <div className="column is-2"></div>
          <div className="mainBody2">
            {/* <div className="searchBarBackground">
        </div> */}
            <div className="columns is-multiline ">
              <div className="column is-four-fifths-desktop is-four-fifths-tablet is-mobile indexList">
                <div className="columns searchBar" >
                  <div className="column is-four-fifths-desktop is-four-fifths-tablet is-half-mobile">
                    <SortFilterBar
                      handleChange={this.handleChange}
                      data={this.state}
                    />
                  </div>
                  <div onClick={this.showListView}  className="mapButton">
                    <i className="fas fa-map-marker-alt listIcon"></i>
                    <div className="displayDesktop">
                      Map
                    </div>                  </div>
                  <div onClick={this.hideListView} className="listButton">
                    <i className="fas fa-list-ul listIcon"></i>
                    <div className="displayDesktop">
                      List
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!this.state.listView &&
          <div className="columns is-multiline ">
            {this.sortedFilteredJobs().map(job =>
              <div className="column is-one-quarter-desktop is-one-quarter-tablet is-four-fifths-mobile indexList" key={job._id}>
                <Link to={`/jobs/${job._id}`}>
                  <div className="card indexCards">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="indexJobTitle">{job.title}</p>
                          <div className="column is-half-desktop is-half-tablet is-half-mobile center">
                            <p className="dayRate">£{job.rate}</p>
                            <div className="dayRateText2">/day rate</div>
                            <p className="indexContract">{job.contract} months</p>
                          </div>
                          <div className="column is-half-desktop is-half-tablet is-half-mobile floatRight" key={job._id}>
                            <div className=" indexCompanyPicture" style={{ backgroundImage: `url(${job.manager.companyPicture})`}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
            }
          </div>
          {this.state.listView &&
      <div>
        <Map
          className="job-index"
          center={{ lat: 51.5151, lng: -0.0718 }}
          markers={this.sortedFilteredJobs()}
        />
      </div>
          }
        </div>
      </div>
    );
  }
}

export default JobsIndex;
