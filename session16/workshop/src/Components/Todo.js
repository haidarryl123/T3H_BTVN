
import './style.css';
import {useState} from "react";

let Todo = (props) => {
    let [newJob,setNewJob] = useState('');
    let [jobs,setJobs] = useState([]);

    const handleChange = (event) => {
        setNewJob(event.target.value);
    }

    const addJob = (event) => {
        if (newJob.trim().length === 0){
            console.log("input something.");
            return;
        }
        setJobs((prev) => {
            let newJobs = [...prev];
            newJobs.push({ name: newJob,active: false});
            return newJobs;
        });
        setNewJob('');
    }

    const deleteJob = (index) => {
        let currentJob = [...jobs];
        const newJobs = currentJob.filter(function (value,idx) {
            return idx !== index;
        });
        setJobs(newJobs);
    }

    const activeJob = (index) => {
        setJobs((prev) => {
            let newJobs = [...prev];
            jobs[index].active = !jobs[index].active;
            return newJobs;
        });
    }

    return (
        <>
            <div className={'container'}>
                <div className={'row mb-5'}>
                    <input className={'form-control d-inline-block mr-5'} type="text" onChange={handleChange} value={newJob} />
                    <button className={'btn cursor-pointer'} onClick={addJob}>Add</button>
                </div>

                { jobs.map( (job,index) => {
                    let status = 'bg-default';
                    if (job.active) {
                        status = 'bg-success';
                    }
                    return (
                        <div key={index} className={'row mb-5 d-flex align-items-center'}>
                            <div className={'item cursor-pointer d-inline-block mr-5 ' + status} onClick={() => activeJob(index)}>
                                <p className={'mb-0'}>{job.name}</p>
                            </div>
                            <button className={'btn cursor-pointer'} onClick={() => deleteJob(index)}>Delete</button>
                        </div>
                    );
                } ) }
            </div>
        </>
    );
}

export default Todo;