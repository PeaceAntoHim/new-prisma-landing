import Swal from 'sweetalert2'
import { useState } from "react";
import Field from "../items/Field";
import SectionTitle from "./SectionTitle";
import ContactItem from "../items/ContactItem";
import SectionParagraph from "./SectionParagraph";
import withReactContent from 'sweetalert2-react-content'
// import { alertService  } from "../items/Alert";
// import { useRouter } from 'next/router';
// import { resetWarningCache } from "prop-types";

export default function ContactSection({ data }) {

    // const [notif, setNotif] = useState({})
    // const router = useRouter()
    const MySwal = withReactContent(Swal)
    const [formData, setFormData] = useState({})
    const [messages, setMessages] = useState(data)

        async function sendMessage(e) {
            e.preventDefault();

            const newMessages = { ...messages, ...formData };
            setMessages(newMessages);
    
                const response = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newMessages)
            })
            // return await response.alert('Message sent successfully');
            // alert(!response.ok ? 'Message not set' : 'Message sent successfully');
            // router.push("/");
            MySwal.fire(!response.ok ? 'Email was be used' : 'Data was sent successfully')
            setFormData(!response.ok ? newMessages : '')
        }



  
    return (
        <section className="container mx-auto px-10 2xl:px-0" id="contact">
            <div className="bg-primarygray flex rounded-lg flex-wrap">
                <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>How to contact me</SectionParagraph>

                        <ContactItem 
                            label="Mail"
                            value="stefanusfranssebastian@gmail.com"
                            icon="/mail.svg"
                            className="mt-10"
                        />
                        <ContactItem 
                            label="Phone"
                            value="081234567890"
                            icon="/phone.svg"
                            className="mt-6"
                        />
                        <ContactItem 
                            label="Twitter"
                            value="@f_sebastian"
                            icon="/twitter.svg"
                            className="mt-6"
                        />
                    </div>
                </div>  
                <form className="md:w-6/12 w-full" onSubmit={sendMessage}>
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">
                                <Field 
                                    label="Name"
                                    name="name"
                                    type="text"
                                    onChange={e=> setFormData({ ...formData, name: e.target.value })}
                                    value={formData.name ?? ""}
                                />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                                <Field 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onChange={e=> setFormData({ ...formData, email: e.target.value })}
                                    value={formData.email ?? ""}
                                />
                            </div>
                        </div>
                        <Field 
                            label="Subject"
                            name="subject"
                            type="text"
                            onChange={e=> setFormData({ ...formData, subject: e.target.value })}
                            value={formData.subject ?? ""}
                        />
                        <Field 
                            label="Message"
                            name="message"
                            type="textarea"
                            onChange={e=> setFormData({ ...formData, message: e.target.value })}
                            value={formData.message ?? ""}
                            className="h-40"
                        />
                        <div className="text-right">
                            <button className="bg-black hover:bg-opacity-90 text-white transition py-3 px-10 font-semibold text-lg inline-block" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}



/*         
const validate = () => {
    let err = {};

    if(!formData.name) {
        err.name = 'Name is required';
    }
    if(!formData.email) {
        err.email = 'Email is required';
    }
    if(!formData.subject) {
        err.subject = 'Subject is required';
    }
    if(!formData.message) {
        err.message = 'Message is required';
    }
    return err;
} */


 /* This code revisted you can see and learn */
 /* This arrow function to define saveMovie */
        //   const saveMessages = e => {
        //     e.preventDefault();
        //     console.log(formData);
        //   }
        
        /* set movies distructuring */
        // async function saveMessages(e) {
        //     e.preventDefault();
        //     setMessages([...messages, formData])
        //     const response = await fetch('/api/messages', {
        //         method: 'POST',
        //         body: JSON.stringify(formData)
        //     })
  
        //     return await response.json()
        // }


              // async function saveMessages(e) {
        //     e.preventDefault();
        //     try {
        //         setMessages([...messages, formData])
        //         await fetch(`http://localhost:3000/api/messages`, {
        //             method: 'POST',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify(formData)
        //         })
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }

         // e.preventDefault();
            // const newMessages = { ...messages, ...formData }
            // setMessages(newMessages)
            // const result = await prisma.message.create({
            //     data: {
            //         ...req.body,
            //         },
            //     })
            //     res.json(result)
            
              
            //     setFormData(formData.newMessages ?? "")


        