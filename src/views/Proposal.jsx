import ProposalDetails from '../components/ProposalDetails'
import Voters from '../components/Voters'
import { useParams } from 'react-router-dom'

const Proposal = () => {
  const {id} = useParams();
 
  return (
    <>
      <ProposalDetails />
      <Voters id={id} />
    </>
  )
}

export default Proposal