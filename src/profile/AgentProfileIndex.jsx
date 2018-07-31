import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import AgentProfileCoachingIndex from 'profile/AgentProfileCoachingIndex';
import AgentProfileCoachingsWidget from 'profile/shared/AgentProfileCoachingsWidget';
import AgentProfileScheduleWidget from 'profile/shared/AgentProfileScheduleWidget';
import AgentProfileStatsWidget from 'profile/shared/AgentProfileStatsWidget';

const AgentProfileWidgets = () => (

  <Fragment>
    <div className="grid__unity-grid">
      <div className="grid__unity-grid__span-columns-6">
        <AgentProfileScheduleWidget
          data={mockUserData}
        />
      </div>
      <div className="grid__unity-grid__span-columns-6">
        <AgentProfileStatsWidget
          data={mockUserData}
        />
      </div>
    </div>
    <div className="grid__unity-grid">
      <AgentProfileCoachingsWidget
        data={mockCoachingsData}
      />
    </div>
  </Fragment>
);

class AgentProfileIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Agent Profile"
          pageTitleIconLeft="headset_mic"
        />
        <PageContent
          pageContentTabs={false}
          pageContentScroll={true}
        >
          <Switch>
            <Route
              exact
              path="/agent_profile">
              <Redirect to="/agent_profile/profile" />
            </Route>
            <Route
              path="/agent_profile/profile"
              component={AgentProfileWidgets}
            />
            <Route
              path="/agent_profile/coaching/:id"
              render={(props) =>
                <AgentProfileCoachingIndex
                  data={mockCoachingsData}
                  {...props}
                />
              }
            />
            </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default AgentProfileIndex;

const mockUserData = {
  id: '1',
  name: 'Kurt Cunningham',
  avatar: 'https://avatars.io/twitter/kurtcunningham',
  schedule: [
    {
      start_time: '2018-06-03 08:00',
      end_time: '2018-06-03 17:00',
    },
    {
      start_time: '2018-06-04 08:00',
      end_time: '2018-06-04 17:00',
    },
    {
      start_time: '2018-06-05 08:00',
      end_time: '2018-06-05 17:00',
    },
    {
      start_time: '2018-06-06 08:00',
      end_time: '2018-06-06 17:00',
    },
    {
      start_time: '2018-06-07 08:00',
      end_time: '2018-06-07 17:00',
    },
    {
      start_time: '2018-06-08 08:00',
      end_time: '2018-06-08 17:00',
    },
    {
      start_time: '2018-06-09 08:00',
      end_time: '2018-06-09 17:00',
    },
    {
      start_time: '2018-06-10 09:30',
      end_time: '2018-06-10 18:30',
    },
  ],
  stats: [
    {
      label: 'Attendance Points (Current/Avg.)',
      value: '04/02',
    },
    {
      label: 'Coachings (Total/Min. per week)',
      value: '3/45',
    },
    {
      label: 'Days Since Last Coaching',
      value: '4',
    },
    {
      label: 'Compliance Points (Current/Avg/)',
      value: '03/01',
    },
    {
      label: 'MTD Commissions',
      value: '$2,397',
    },
    {
      label: 'Promotion Eligible',
      value: 'Yes',
    },
    {
      label: 'Fun Five',
      value: '01',
    },
    {
      label: 'Last Month Comp.',
      value: '$3,100',
    },
    {
      label: 'Active DA',
      value: '01',
    },
  ],
};

const mockCoachingsData = [
  {
    id: '0',
    date: '03/25/18',
    call_id: '1132',
    coaching_by: 'Bonnie Adams',
    coaching_category: 'Overcoming hesitation / 4-step Process',
    coaching_report: [
      {
        label: 'What',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'Why',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'How/Role Play',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'Expectation',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'Follow-up',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'SPC/SD Notes',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
    ],
  },
  {
    id: '1',
    date: '03/23/18',
    call_id: '1122',
    coaching_by: 'Bonnie Adams',
    coaching_category: 'Overcoming hesitation / 4-step Process',
    coaching_report: [
      {
        label: 'What',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'Why',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'How/Role Play',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'Expectation',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'Follow-up',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
      {
        label: 'SPC/SD Notes',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales leo euismod felis dignissim, ut hendrerit tortor pellentesque. Sed ipsum sapien, congue eu lacinia non, dignissim sed nisl. Proin sem diam, porttitor et feugiat a, iaculis vitae orci. Donec arcu quam, ultricies laoreet mauris non, euismod sagittis felis. Nulla posuere facilisis ipsum lacinia tristique. Mauris quis dignissim sem, eu ultrices nibh. Ut posuere, ligula eleifend tincidunt eleifend, felis nulla feugiat purus, mollis interdum nulla turpis et eros.'
      },
    ],
  },
];
