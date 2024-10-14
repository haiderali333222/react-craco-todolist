/* eslint-disable array-callback-return */

const fileArray = [
  'csv',
  'doc',
  'docx',
  'gif',
  'jpg',
  'jpeg',
  'jfif',
  'pdf',
  'png',
  'ppt',
  'pptx',
  'txt',
  'webp',
  'xls',
  'xlsx',
];

export const extractEmails = (array) => {
  const emailArray = [];
  array.map((person) => emailArray.push(person.email));
  return emailArray;
};

export function getParameterByName(name, url = window.location.href) {
  // eslint-disable-next-line no-param-reassign
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const mapper = (peopleArray) => {
  const obj = {};
  peopleArray.map((person) => {
    obj[person.email] = person;
  });
  return obj;
};

export const suffixThNd = (i) => {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
};

export const statusToString = (num) => {
  switch (num) {
    case 0:
      return 'Saved Locally';
    case 1:
      return 'Draft';
    case 2:
      return 'In Progress';
    case 3:
      return 'Escalated';
    case 4:
      return 'Pending Closure';
    case 5:
      return 'Closed';
    case 6:
      return 'Notified To';
    default:
      return 'Invalid Status';
  }
};

export const riskToString = (num) => {
  console.log('risk to string', num);
  if (Number.isNaN(num)) return '';

  if (num > 0 && num <= 6) {
    return 'low';
  }
  if (num > 6 && num < 14) {
    return 'medium';
  }
  if (num >= 14 && num <= 25) {
    return 'high';
  }
  return 'low';
};

export const textEllipsis = (str, length) => {
  if (length == null) {
    length = 100;
  }

  if (str?.length > length) {
    return `${str.substring(0, length - 3)}...`;
  }
  return str;
};

export const isAcceptedFormat = (file, supportedFormats = fileArray) => {
  let check = false;
  console.log('file', file);
  console.log('supported format', supportedFormats);
  supportedFormats.forEach((filetype) => {
    if (filetype === file.name.split(/[. ]+/).pop()) check = true;
  });

  return check;
};
