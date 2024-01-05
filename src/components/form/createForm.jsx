import { useState } from "react";

export default function CreateForm() {
    const [fullName, setFullName] = useState(''); 
    const [subject, setSubject] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [body, setBody] = useState('');

    function onFullNameChange(event) {
        setFullName(event.target.value);
    }
    function onSubjectChange(event) {
        setSubject(event.target.value);
    }
    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    function onBodyChange(event) {
        setBody(event.target.value);
    }

    function onFormSubmit(event){
        event.preventDefault();
        console.log(fullName, subject, email, body);

    }

    return (
        <div className="w-full max-w-xs">
            <form onSubmit={onFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
                <input
                className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                value={fullName}
                placeholder="Full Name"
                onChange={onFullNameChange}
                required
                minLength={3}
                 />
                <input
                className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                value={subject}
                placeholder="Subject"
                onChange={onSubjectChange}
                required
                minLength={3}
                 />
                <input
                className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                placeholder="E-mail"
                onChange={onEmailChange}
                required
                type="email"
                 />
                <input
                className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                value={body}
                placeholder="What can we help you with?"
                onChange={onBodyChange}
                required
                minLength={3}
                 />
                <button type="submit"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:button-bg-hover">
                Submit
                </button>
            </form>
        </div>
    );
}