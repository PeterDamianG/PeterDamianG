/**
 * A var type const, contain info to display list of certifications.
 * @const
 * @example
 * import listCertification from 'main/sections/about/cert/listCertification'
 * console.log(listCertification[0].title)
 */
const listCertification = [
  {
    id: 0,
    title: 'JavaScript Algorithms and Data Structures',
    emit: 'freeCodeCamp',
    emitURL: 'https://www.linkedin.com/school/free-code-camp/',
    cred: 'no',
    url: 'https://www.freecodecamp.org/certification/peterdg/javascript-algorithms-and-data-structures',
  },
  {
    id: 1,
    title: 'Aceleración FullStack en React, Node. Job Ready.',
    emit: 'Alkemy',
    emitURL: 'https://www.linkedin.com/company/alkemy2020/',
    cred: '042-344',
    url: 'https://drive.google.com/file/d/1Ok8El_CKfCYyhfnkDs6v7FC7oIElLb9W/view',
  },
  {
    id: 2,
    title: 'Google Activate Introducción al Desarrollo Web (II)',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    cred: '2CG GHY F28',
    url: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 3,
    title: 'Google Activate Introducción al Desarrollo Web (I)',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    cred: 'VU5 LBF 85S',
    url: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 4,
    title: 'Google Activate Cloud Computing',
    emit: 'Google Actívate',
    emitURL: 'https://www.linkedin.com/company/activatecongoogle/',
    cred: 'SJ5 A65 58Z',
    url: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
  },
  {
    id: 5,
    title: 'EF SET English Certificate 49/100 (B1 Intermediate)',
    emit: 'EF Standard English Test (EF SET)',
    emitURL: 'https://www.linkedin.com/company/efset/',
    cred: 'no',
    url: 'https://www.efset.org/cert/QAFMtr',
  },
] as const; // as const, this is readonly inmutable.

export default listCertification;
