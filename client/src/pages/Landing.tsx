import React from 'react';
//import taskListIcon from "../Assets/images/task-list-icon.jpg";
import Wrapper from '../Assets/Wrappers/LandingPage';
import {Logo} from '../components';
  

  const undraw =  require("../Assets/images/myTasks.png"); 

function Landing(): JSX.Element {
  return (
    <Wrapper>
      <nav>
<Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Task<span>Steno</span>app
          </h1>
          <p>
            TaskStenoApp is a powerful task management application designed to
            help you stay organized and efficient. Whether you're an individual
            looking to manage your personal tasks or a team collaborating on
            projects, TaskApp has got you covered. With TaskApp, you can easily
            create tasks, set due dates, assign priorities, and monitor
            progress. Stay on top of your to-do list by categorizing tasks into
            different projects and adding labels for better organization. You
            can also set reminders and receive notifications, ensuring you never
            miss a deadline again.
            TaskApp provides a user-friendly interface that is intuitive and
            easy to navigate. The clean and modern design makes it a pleasure
            to use, while the robust features empower you to streamline your
            workflow and boost productivity.
            Join TaskApp today and experience the convenience of a reliable
            task management solution. Sign up now to start creating tasks,
            tracking progress, and achieving your goals more efficiently than
            ever before!
          </p>
        </div>
        <img src={undraw} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
}

export default Landing;
