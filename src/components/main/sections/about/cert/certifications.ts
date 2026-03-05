/**
 * A var type const, contain info to display list of certifications.
 * @const
 * @example
 * import listCertification from 'main/sections/about/cert/listCertification'
 * console.log(listCertification[0].title)
 */
const CERTIFICATIONS = [
  {
    id: 6,
    title: 'JavaScript Algorithms and Data Structures',
    emit: 'freeCodeCamp',
    emitURL: 'https://www.linkedin.com/school/free-code-camp/',
    credID: '',
    URL: 'https://www.freecodecamp.org/certification/peterdg/javascript-algorithms-and-data-structures',
  },
  {
    id: 5,
    title: 'Aceleración FullStack en React, Node. Job Ready.',
    emit: 'Alkemy',
    emitURL: 'https://www.linkedin.com/company/alkemy2020/',
    credID: '042-344',
    URL: 'https://drive.google.com/file/d/1Ok8El_CKfCYyhfnkDs6v7FC7oIElLb9W/view',
  },
  {
    id: 4,
    title: 'Google Activate Introducción Básica al Desarrollo App Móviles',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    credID: '6KF G9N N33',
    URL: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 3,
    title: 'Google Activate Introducción al Desarrollo Web (II)',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    credID: '2CG GHY F28',
    URL: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 2,
    title: 'Google Activate Introducción al Desarrollo Web (I)',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    credID: 'VU5 LBF 85S',
    URL: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 1,
    title: 'Google Activate Cloud Computing',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    credID: 'SJ5 A65 58Z',
    URL: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 0,
    title: 'EF SET English Certificate 49/100 (B1 Intermediate)',
    emit: 'EF Standard English Test (EF SET)',
    emitURL: 'https://www.linkedin.com/company/efset/',
    credID: '',
    URL: 'https://www.efset.org/cert/QAFMtr',
  },
] as const;

export default CERTIFICATIONS;
