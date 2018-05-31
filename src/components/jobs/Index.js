
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import Auth from '../../lib/Auth';


import SortFilterBar from './SortFilterBar';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Map from '../common/Map';

class JobsIndex extends React.Component {
  state = {
    jobs: [],
    search: '',
    sort: 'title|asc',
    searchBar: true
  }

  showListView = () => this.setState({ listView: true });
  hideListView = () => this.setState({ listView: false });
  showSearchBar = () => this.setState({ searchBar: !this.state.searchBar });


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

  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <Sidebar
          showSearchBar={this.showSearchBar}
          showListView={this.showListView}
          hideListView={this.hideListView}
          state={this.state}
        />
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
        />
        <div className="mainBody">
          {!this.state.listView &&
            <div className="columns is-multiline ">
              {this.sortedFilteredJobs().map(job =>
                <div className="column is-one-third-desktop is-full-tablet is-mobile indexList" key={job._id}>
                  <Link to={`/jobs/${job._id}`}>
                    <div className="card indexCards">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            {/* <img className="indexManagerProfilePicture" src={job.manager.picture} />
                            <div className="indexManagerDetails">
                              <div className="managerName">{job.manager.firstName} {job.manager.lastName}</div>
                              <div className="hiringManager">Hiring Manager</div>
                              <div className="emailDetails">{job.manager.email}</div>
                            </div> */}
                            <p className="indexJobTitle">{job.title}</p>
                            <p className="dayRateTextMoney">£{job.rate}</p>
                            <div className="dayRateText2">/day rate</div>
                            <p className="indexContract">{job.contract} months</p>
                            <div className=" indexCompanyPicture" style={{ backgroundImage: `url(${job.manager.companyPicture})`}} />
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
    );
  }
}

export default JobsIndex;
