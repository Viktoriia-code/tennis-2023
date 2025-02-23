import PageTitle from '../components/PageTitle';
import styled from 'styled-components';

const YhteystiedotStyles = styled.section`
  .separator {
    border-top: 4px solid var(--gray-bg);
    width: 250px;
    background-color: black;
    margin: 0 auto;
    display: flex;
  }
`

const Yhteystiedot = () => {
  return (
    <>
      <PageTitle title='Yhteystiedot' />
      <YhteystiedotStyles>
        <div className="container_small text-center flex flex-col gap-3">
          <div>
            <p className="font-semibold">Käpylä Matti, valmennuspäällikkö</p>
            <p>050 3052120</p>
            <p>matti(at)jarvenpaantennisseura.fi</p>
          </div>
          <div className='separator'></div>
          <div>
            <p className="font-semibold">Kohtamäki Samuli, valmentaja</p>
            <p>040 7488970</p>
          </div>
          <div className='separator'></div>
          <div>
            <p className="font-semibold">Aalto-Setälä Stefan, valmentaja</p>
            <p>044 5292435</p>
          </div>
          <div className='separator'></div>
          <div>
            <p className="font-semibold">Kalliokoski Mathias, puheenjohtaja</p>
            <p>045 1235404</p>
            <p>mathias.kalliokoski (at) gmail.com</p>
          </div>

          <p className="mt-4">Joissain tilanteissa laskuja on saamamme palautteen mukaan ohjautunut asiakkaan roskapostiin. Valitettavasti emme pysty tekemään turvamäärityksiä asiakkaiden sähköpostitileihin. Pyydämmekin ystävällisesti Teitä määrittämään sähköpostinne turva-asetukset siten, että hyväksytte kyseisen osoitteen luotettavaksi. Kiitämme yhteistyöstänne ja pahoittelemme mahdollista ylimääräistä vaivaa.</p>
        </div>
      </YhteystiedotStyles>
    </>
  )
}

export default Yhteystiedot