import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import ContactInfo from "../ContactInfo/ContactInfo"

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is Required'),
    lastName: Yup.string().required('Last name is Required'),
    email: Yup.string().email('Invalid email address').required('Email address is Required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Must be a number').required('Phone number is Required'),
    date: Yup.date().required('Date is Required'),
    guestNumber: Yup.number().min(1, 'At lest 1 guest is Required').required('Number of guest is Required'),
    comments: Yup.string().required('Comments are Required')
    
})



function ContactForm() {

    const handleSubmit = (values, {resetForm}) => {

        // Enviar el mail con EmailJS

        const serviceId = 'service_k9o5okc'
        const templateId = 'template_jdd7owd'
        const publicKey = 'i8MVs1bZ5vF8uEl8C'

        emailjs
        .send(serviceId, templateId, {
            to_name:'React Restaurant',
            from_name: values.firstName + " " + values.lastName,
            from_email: values.email,
            message: values.comments,
            guest_number: values.guestNumber,
            date: values.date,
            phone: values.phone,
            subject: "New reservation from website",
        }, publicKey)
        .then(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted!',
                    text: 'Your message has been sent successfully.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                resetForm()
            },
            (error) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                console.log('Emailjs error:', error)
            }
        )
    }


    return (
    <div className="container my-5">

        <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <ContactInfo/>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
            <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              date: '',
              guestNumber: '',
              comments: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {({ errors, touched }) => (
              <Form className="w-100">
                <div className="row mb-3 mt-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`form-control ${
                        errors.firstName && touched.firstName ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`form-control ${
                        errors.lastName && touched.lastName ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email">Email Address</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${
                        errors.email && touched.email ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="email" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Phone Number</label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${
                        errors.phone && touched.phone ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="phone" className="invalid-feedback" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="date">Date</label>
                    <Field
                      type="date"
                      id="date"
                      name="date"
                      className={`form-control ${
                        errors.date && touched.date ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="date" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="guestNumber">Number of Guests</label>
                    <Field
                      type="number"
                      id="guestNumber"
                      name="guestNumber"
                      className={`form-control ${
                        errors.guestNumber && touched.guestNumber ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="guestNumber"
                      className="invalid-feedback"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comments">Comments</label>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    className={`form-control ${
                      errors.comments && touched.comments ? 'is-invalid' : ''
                    }`}
                  />
                  <ErrorMessage component="div" name="comments" className="invalid-feedback" />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
            </div>
        </div>

    </div>
    )
}

export default ContactForm
