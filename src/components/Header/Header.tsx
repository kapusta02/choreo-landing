import { Link } from 'react-router-dom';
import '../../App.css';
import './Header.css';

export const Header = () => {
    return (
        <header className="header bg-dark py-2">
            <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between header-block">
                <Link to="/" className="navbar-brand mb-2">
                    <picture>
                        <source srcSet="/images/logo.webp" type="image/webp" />
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="logo"
                        />
                    </picture>
                </Link>

                <button
                    type="button"
                    className="btn btn-primary btn-header"
                    data-bs-toggle="modal"
                    data-bs-target="#requestModal"
                >
                    Оставить заявку
                </button>
            </div>

            <div
                className="modal fade"
                id="requestModal"
                tabIndex={-1}
                aria-labelledby="requestModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="requestModalLabel">Оставить заявку</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Закрыть"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            Для отправки заявки, пожалуйста, свяжитесь с нашим менеджером
                            по{' '}
                            <a
                                href="https://wa.me/77478114235?text=Здравствуйте!%20Пишу%20с%20сайта%20choreographers.kz,%20хочу%20оставить%20заявку%20на%20конкурс%20в%20ОАЭ%20и%20узнать%20подробности"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>
                            .
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};