import { LinkHeaderHashNavigationType } from "./types"


const AboutNavigation: LinkHeaderHashNavigationType = {
  id: 'header-item-0--about',
  hash: '#about',
  label: '0001 | About'
}
const ExperienceNavigation: LinkHeaderHashNavigationType = {
    id: 'header-item-1--experience',
  hash: '#experience',
  label: '0010 | Experience'
}
const WorkNavigation: LinkHeaderHashNavigationType = {
    id: 'header-item-2--work',
  hash: '#work',
  label: '0011 | Work'
}
const ContactNavigation: LinkHeaderHashNavigationType = {
    id: 'header-item-3--contact',
  hash: '#contact',
  label: '0100 | Contact'
} 

export const LinkAnchorNavigation:Array<LinkHeaderHashNavigationType> = [AboutNavigation, ExperienceNavigation, WorkNavigation, ContactNavigation]