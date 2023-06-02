import './ProfileFooter.scss'
import React from 'react'
import questionsFooter from '../../../assets/questionsFooter.svg'
import manageAccountFooter from '../../../assets/manageAccountFooter.svg'
import recommendationTransparencyFooter from '../../../assets/recommendationTransparencyFooter.svg'

const ProfileFooter = () => {
  return (
    <div className="">
      <div className="profileFooter-container">
        <div className="profile-footer-top-left">
          <a href="#">About</a>
        </div>
        <div className="profile-footer-top-middle">
          <a href="#">Accessibility</a>
        </div>
        <div className="profile-footer-top-right">
          <a href="#">Talent Solutions</a>
        </div>
        <div className="profile-footer-left-two">
          <a href="#">Community Guidelines</a>
        </div>
        <div className="profile-footer-left-three">
          <a href="#">Privacy & Terms</a>
        </div>
        <div className="profile-footer-left-four">
          <a href="#">Sales Solutions</a>
        </div>
        <div className="profile-footer-left-five">
          <a href="#">Safety Center</a>
        </div>
        <div className="profile-footer-middle-two">
          <a href="#">Careers</a>
        </div>
        <div className="profile-footer-middle-three">
          <a href="#">Ad Choices</a>
        </div>
        <div className="profile-footer-middle-four">
          <a href="#">Mobile</a>
        </div>
        <div className="profile-footer-middle-five"></div>
        <div className="profile-footer-right-two">
          <a href="#">Marketing Solutions</a>
        </div>
        <div className="profile-footer-right-three">
          <a href="#">Advertising</a>
        </div>
        <div className="profile-footer-right-four">
          <a href="#">Small Business</a>
        </div>
        <div className="profile-footer-right-five"></div>
        <div className="footer-action-top-left">
          <li className="profile-footer-icons">
            <img
              src={questionsFooter}
              alt="Questions"
              className="profile-footer-helper-icon"
            />
            <span className="profile-footer-content">
              <span className="profile-footer-title">
                <a href="#">Questions?</a>
              </span>
              <br />
              Visit our Help Center.
            </span>
          </li>
          <br />
        </div>
        <div className="footer-action-middle-left">
          <li className="profile-footer-icons">
            <img
              src={manageAccountFooter}
              alt="Questions"
              className="profile-footer-helper-icon"
            />
            <span className="profile-footer-content">
              <span className="profile-footer-title">
                <a href="#">Manage your account and privacy</a>
              </span>
              <br />
              Go to your Settings.
            </span>
          </li>
        </div>
        <div className="footer-action-bottom-left">
          <li className="profile-footer-icons">
            <img
              src={recommendationTransparencyFooter}
              alt="Questions"
              className="profile-footer-helper-icon"
            />
            <span className="profile-footer-content">
              <span className="profile-footer-title">
                <a href="#">Recommendation transparency</a>
              </span>
              <br />
              Learn more about Recommended Content.
            </span>
          </li>
        </div>
        <div className="footer-action-top-right"></div>
        <div className="footer-action-middle-right"></div>
        <div className="footer-action-bottom-right">
          Select Language
          <br />
          <select
            id="globalfooter-select_language"
            className="global-footer__language-selection-dropdown t-12 t-black--light t-bold">
            Please Select
            <option value="ar_AE" lang="ar-ae">
              العربية (Arabic)
            </option>
            <option value="cs_CZ" lang="cs-cz">
              Čeština (Czech)
            </option>
            <option value="da_DK" lang="da-dk">
              Dansk (Danish)
            </option>
            <option value="de_DE" lang="de-de">
              Deutsch (German)
            </option>
            <option value="en_US" lang="en-us">
              English (English)
            </option>
            <option value="es_ES" lang="es-es">
              Español (Spanish)
            </option>
            <option value="fr_FR" lang="fr-fr">
              Français (French)
            </option>
            <option value="hi_IN" lang="hi-in">
              हिंदी (Hindi)
            </option>
            <option value="in_ID" lang="in-id">
              Bahasa Indonesia (Indonesian)
            </option>
            <option value="it_IT" lang="it-it">
              Italiano (Italian)
            </option>
            <option value="ja_JP" lang="ja-jp">
              日本語 (Japanese)
            </option>
            <option value="ko_KR" lang="ko-kr">
              한국어 (Korean)
            </option>
            <option value="ms_MY" lang="ms-my">
              Bahasa Malaysia (Malay)
            </option>
            <option value="nl_NL" lang="nl-nl">
              Nederlands (Dutch)
            </option>
            <option value="no_NO" lang="no-no">
              Norsk (Norwegian)
            </option>
            <option value="pl_PL" lang="pl-pl">
              Polski (Polish)
            </option>
            <option value="pt_BR" lang="pt-br">
              Português (Portuguese)
            </option>
            <option value="ro_RO" lang="ro-ro">
              Română (Romanian)
            </option>
            <option value="ru_RU" lang="ru-ru">
              Русский (Russian)
            </option>
            <option value="sv_SE" lang="sv-se">
              Svenska (Swedish)
            </option>
            <option value="th_TH" lang="th-th">
              ภาษาไทย (Thai)
            </option>
            <option value="tl_PH" lang="tl-ph">
              Tagalog (Tagalog)
            </option>
            <option value="tr_TR" lang="tr-tr">
              Türkçe (Turkish)
            </option>
            <option value="uk_UA" lang="uk-ua">
              Українська (Ukrainian)
            </option>
            <option value="zh_CN" lang="zh-cn">
              简体中文 (Chinese (Simplified))
            </option>
            <option value="zh_TW" lang="zh-tw">
              正體中文 (Chinese (Traditional))
            </option>
          </select>
        </div>
      </div>
      <div className="profile-footer-bottom">
        EFG Corporation Copyright &#169; 2023{' '}
      </div>
    </div>
  )
}

export default ProfileFooter
