/* eslint-disable */

export const validateRulesObject = {
  password: {
    reg: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    errorMessage: "Current Password cannot be blank.",
  },
  firstname: {
    reg: /^(?=.{2,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
    errorMessage:
      "Must be at least 2 characters long, but should be 20 characters or fewer.",
  },
  lastname: {
    reg: /^(?=.{2,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
    errorMessage:
      "Must be at least 2 characters long, but should be 20 characters or fewer.",
  },
  name: {
    reg: /^(?=.{2,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
    errorMessage:
      "Must be at least 2 characters long, but should be 20 characters or fewer.",
  },
  title: {
    reg: /^([\w\s]{0,50})?$/,
    errorMessage: "The field must not be greater than 50 characters",
  },
  street: {
    reg: /^([\/\:\.\,\w\d\s]{0,50})?$/,
    errorMessage: "Please provide a valid street.",
  },
  city: {
    reg: /^([\w\s]{0,50})?$/,
    errorMessage: "Please provide a valid city.",
  },
  state: {
    reg: /^([\w\s]{0,50})?$/,
    errorMessage: "Please provide a valid state.",
  },
  zip: {
    reg: /^(\d{5})?$/,
    errorMessage: "Please enter a valid zip code.",
  },
  phone_private: {
    reg: /^([\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6})?$/,
    errorMessage:
      "Your private phone must match the pattern +XXX(XX)-XXX-XXXX or contain only numbers.",
  },
  phone_work: {
    reg: /^([\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6})?$/,
    errorMessage:
      "Your work phone must match the pattern +XXX(XX)-XXX-XXXX or contain only numbers.",
  },
  mobile: {
    reg: /^([\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6})?$/,
    errorMessage:
      "Your mobile must match the pattern +XXX(XX)-XXX-XXXX or contain only numbers.",
  },
  fax: {
    reg: /^(\+?[0-9]{6,})?$/,
    errorMessage: "Please enter a valid fax.",
  },
  im_skype: {
    reg: /^(\:?[\w\d]{0,20})?$/,
    errorMessage: "Please provide a valid Skype.",
  },
  im_xmpp: {
    reg: /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])?$/,
    errorMessage: "XMPP Jabber Address is not a valid email address.",
  },
  url: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Url is not a valid URL.",
  },
  url_facebook: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Facebook url is not a valid URL.",
  },
  url_linkedin: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Linkedin url is not a valid URL.",
  },
  url_xing: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Xing url is not a valid URL.",
  },
  url_youtube: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Youtube url is not a valid URL.",
  },
  url_vimeo: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Vimeo url is not a valid URL.",
  },
  url_flickr: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Flickr url is not a valid URL.",
  },
  url_myspace: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "MySpace url is not a valid URL.",
  },
  url_twitter: {
    reg: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})?$/,
    errorMessage: "Twitter url is not a valid URL.",
  },
};
