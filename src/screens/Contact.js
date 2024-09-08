import React from "react";
import './styles/Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        const api_url = 'apiのURL';

        fetch(api_url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encodeURI(`name=${data.name}&email=${data.email}&body=${data.body}`)
        })
            .then((response) => response.json())
            .then((result) => alert(result.message))
            .catch((error) => alert(error.message))
    }
    return (
        <main className="contact_form">
            <h2>お問合せ</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <label>お名前</label>
                    <input type="text" id="name" {...register("name", { required: "お名前は必須です。" })} />
                    {errors.name && <span className="form_error">{errors.name.message}</span>}
                </div>
                <div className="form_group">
                    <label>email</label>
                    <input type="email" id="email" {...register("email", {
                        required: "emailは必須です。",
                        pattern: {
                            value: /^[a-z0-9.]+@[a-z]+\.[a-z]+$/,
                            message: "emailの形式で入力してください。"
                        }
                    })} />
                    {errors.email && <span className="form_error">{errors.email.message}</span>}
                </div>
                <div className="form_group">
                    <label>お問合せ内容</label>
                    <textarea id="body" rows={4} {...register("body", {
                        required: "お問合わせ内容は必須です。",
                        maxLength: {
                            value: 10,
                            message: "10文字以下で入力してください。"
                        }
                    })}></textarea>
                    {errors.body && <span className="form_error">{errors.body.message}</span>}
                </div>
                <button className="submit_btn" id="submit_btn">送信</button>
            </form>
        </main >
    )
}
export default Contact;