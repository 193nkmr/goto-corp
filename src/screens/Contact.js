import React from "react";
import './styles/Contact.css';

const Contact = () => {
    return (
        <main className="contact_form">
            <h2>お問合せ</h2>
            <form>
                <div className="form_group">
                    <label>お名前</label>
                    <input type="text" id="name" />
                    <span className="form_error hidden" id="name_error">お名前は必須です。</span>
                </div>
                <div className="form_group">
                    <label>email</label>
                    <input type="email" id="email" />
                    <span className="form_error hidden" id="email_error">emailは必須かつemailの形式で入力してください。</span>
                </div>
                <div className="form_group">
                    <label>お問合せ内容</label>
                    <textarea id="body" rows={4}></textarea>
                    <span className="form_error hidden" id="body_error">お問合せ内容は必須かつ1文字以上10文字以下で入力してください。</span>
                </div>
                <button className="submit_btn" id="submit_btn">送信</button>
            </form>
        </main >
    )
}

export default Contact;