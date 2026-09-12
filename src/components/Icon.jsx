import {
  IconValve,
  IconFlange,
  IconFreight,
  IconGauge,
  IconPlant,
  IconWarehouse,
  IconAgreement,
  IconBellows,
  IconHose,
  IconSteamTrap,
  IconActuator,
} from './Icons.jsx'

const map = {
  valve: IconValve,
  flange: IconFlange,
  freight: IconFreight,
  gauge: IconGauge,
  plant: IconPlant,
  warehouse: IconWarehouse,
  agreement: IconAgreement,
  bellows: IconBellows,
  hose: IconHose,
  steamtrap: IconSteamTrap,
  actuator: IconActuator,
}

export default function Icon({ name, className }) {
  const Cmp = map[name]
  if (!Cmp) return null
  return <Cmp className={className} />
}
