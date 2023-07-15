"use client";
import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";

import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

const countryOptionTemplate = (option) => {
  return (
    <div className="flex items-center w-16">
      <Image
        alt={option.short}
        src={option.flag}
        className={`mr-2 rounded aspect-[1.3/1] h-auto w-auto`}
        width={20}
        height={20}

        //   sizes="10vh"
      />

      <div>{`(${option.code})`}</div>
    </div>
  );
};
const selectedCountryTemplate = (option, props) => {
  if (option) {
    return <span>{option.code}</span>;
  }
  return <span>{props.placeholder}</span>;
};

const ContactForm = ({ countries }) => {
  const toast = useRef();
  return (
    <>
      <Toast ref={toast} />
      <Formik
        initialValues={{
          name: "",
          phone: "",
          countryCode: "",
          email: "",
          company: "",
          notes: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .trim()
            .min(5, "Too short name")
            .max(100, "Too long title.")
            .required()
            .label("Name"),
          phone: Yup.string()
            .min(9, "This is not a valid number!")
            .max(20, "This is not a valid number!")
            .required(),
          countryCode: Yup.object().required(),
          email: Yup.string().email().required("The email is required!"),
          company: Yup.string().trim().max(100, "Too long name!").required(),
          notes: Yup.string().label("Partners images links"),
        })}
        // onSubmit={async (
        // 	values,
        // 	{ setErrors, setStatus, setSubmitting }
        // ) => {
        // 	try {
        // 		const docRef = doc(db, '/website-content/LIVE/content', 'home');
        // 		await setDoc(docRef, values);
        // 		setStatus({ success: true });
        // 		setNotification(true);
        // 		setSubmitting(false);
        // 		setNotification({
        // 			show: true,
        // 			varient: 'success',
        // 			title: 'Success',
        // 			message: 'Your data was saved successfully!'
        // 		});
        // 	} catch (err) {
        // 		setStatus({ success: false });
        // 		setErrors({ submit: err.message });
        // 		setSubmitting(false);
        // 		setNotification({
        // 			show: true,
        // 			varient: 'error',
        // 			title: 'Task Faild',
        // 			message: err.message
        // 		});
        // 	}
        // }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          isSubmitting,
        }) => (
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="w-full">
              <InputText
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  Boolean(touched.name && errors.name) ? "p-invalid" : ""
                } w-full`}
              />
              <small className="p-error block">
                {(Boolean(touched.name && errors.name) && errors.name) || " "}
              </small>
            </div>
            <div className="w-full">
              <div className="p-inputgroup">
                <Dropdown
                  name="countryCode"
                  value={values.countryCode}
                  options={countries}
                  optionLabel="code"
                  //   className="w-full md:w-14rem"
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                  filter
                  filterBy="name,code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    Boolean(touched.countryCode && errors.countryCode)
                      ? "p-invalid"
                      : ""
                  }`}
                />

                <InputText
                  style={{ width: "23%" }}
                  keyfilter="int"
                  useGrouping={false}
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number"
                  className={`${
                    Boolean(touched.phone && errors.phone) ? "p-invalid" : ""
                  }`}
                />
              </div>
              <small className="p-error block">
                {Boolean(touched.phone && errors.phone) &&
                Boolean(touched.countryCode && errors.countryCode)
                  ? `${errors.phone} && ${errors.countryCode}`
                  : (Boolean(touched.phone && errors.phone) && errors.phone) ||
                    (Boolean(touched.countryCode && errors.countryCode) &&
                      errors.countryCode) ||
                    " "}
              </small>
            </div>
            <div className="w-full">
              <InputText
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  Boolean(touched.email && errors.email) ? "p-invalid" : ""
                } w-full`}
              />
              <small className="p-error block">
                {(Boolean(touched.email && errors.email) && errors.email) ||
                  " "}
              </small>
            </div>
            <div className="w-full">
              <InputText
                name="company"
                placeholder="Company Name"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  Boolean(touched.company && errors.company) ? "p-invalid" : ""
                } w-full`}
              />
              <small className="p-error block">
                {(Boolean(touched.company && errors.company) &&
                  errors.company) ||
                  " "}
              </small>
            </div>
            <div className="w-full">
              <InputTextarea
                autoResize
                rows={6}
                name="notes"
                placeholder="Tell us more about your company and what services you need..."
                value={values.notes}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  Boolean(touched.notes && errors.notes) ? "p-invalid" : ""
                } w-full`}
              />
              <small className="p-error block">
                {(Boolean(touched.notes && errors.notes) && errors.notes) ||
                  " "}
              </small>
            </div>
            <Button
              className="w-1/2 self-center justify-center bg-[#005d63]"
              rounded
              loading={isSubmitting}
              type="submit"
            >
              Send
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;