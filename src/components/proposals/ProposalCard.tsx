import Link from 'next/link'
import styled from 'styled-components'
import { SanitizedHtml } from '../common/SanitizedHtml'
import { Proposal, Stage } from '../../types'
import { StarIcon } from '../common/StarIcon'
import { FC, memo } from 'react'

const CardLink = styled.a`
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: none;
  background: white;
  border: 1px solid #f4f6fb;
  box-shadow: 0px 8px 10px #e7f0f3;
  border-radius: 4px;
  padding: 2rem 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  transition: all 0.4s ease;
  flex-wrap: wrap;
  position: relative;
  border: 1px solid #e7f0f3;

  .feather-star {
    transition: fill 0.4s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 10px 8px #e7f0f3;
    color: black;

    .feather-star {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`

const CardContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-overflow: ellipsis;
  overflow: visible;
  cursor: pointer;
  min-width: 8rem;
  font-weight: bold;

  code {
    font-size: 0.95rem;
  }
`

const Stars = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

interface Props {
  stage: Stage
  proposal: Proposal
  index: number
}

export const ProposalCard: FC<Props> = memo(({ stage, proposal, index }) => {
  // TODO: Remove this when the multi-proposal edge case is handled.
  // Some proposals in the readmes can have multiple proposals in a single column (e.g. "Class Fields")
  if (proposal.titleHtml.includes('Class Fields')) {
    return null
  }

  return (
    <Link
      passHref
      href={`/proposals/${encodeURIComponent(proposal.title)}`}
      key={`${proposal.title}-link`}
    >
      <CardLink>
        <CardContent>
          <strong>
            <SanitizedHtml html={proposal.titleHtml} />
          </strong>
          {proposal.stars != null && (
            <Stars>
              <StarIcon />
              <span style={{ fontSize: '0.8rem' }}>{proposal.stars}</span>
            </Stars>
          )}
        </CardContent>
      </CardLink>
    </Link>
  )
})
