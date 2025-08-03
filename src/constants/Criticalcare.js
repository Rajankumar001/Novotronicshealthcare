import multipara from '../assets/images/multipara.png';
import syringe from '../assets/images/syringe_pump.jpg';
import ecgMachine from '../assets/images/ECG_machine.jpg';
import Defibrillator from '../assets/images/Defibrillator.jpg';
import infusion from '../assets/images/Infusion.jpg';
import ventilator from '../assets/images/ventilator.jpg';

export const Criticalcare = [
  {
    id: 1,
    name: "Multipara monitor",
    image: multipara,
    specifications: `• Display: 8–15 inch high-resolution TFT/LCD screen, color display with waveform and numeric data.
• Parameters Monitored: ECG, SpO₂, NIBP, Temperature, Respiration, optional IBP, EtCO₂, cardiac output, etc.
• ECG: 3/5/12 lead ECG monitoring, arrhythmia detection, ST segment analysis.
• SpO₂: High accuracy with motion and low-perfusion resistance, pleth waveform display.
• NIBP: Non-invasive BP measurement with adult/pediatric/neonatal modes.
• Temperature: Dual-channel temperature monitoring.
• Respiration: Impedance respiration measurement.
• IBP (Optional): Up to 2 channels with waveform and numeric values.
• EtCO₂ (Optional): Mainstream or sidestream capnography.
• Alarms: Audible and visual alarms for all parameters, user-configurable limits.
• Data Storage: Trend data, event recall, waveform storage.
• Connectivity: USB, LAN, Wi-Fi (optional), HL7 compatibility for hospital network (optional).
• Battery: Built-in rechargeable battery for portable use (2–4 hours).
• Mounting: Bedside, wall-mount, or mobile trolley.`
  },
  {
    id: 2,
    name: "Syringe Pump",
    image: syringe,
    specifications: `• Display: High-contrast LCD/LED display for infusion parameters and status.
• Flow Rate Range: Typically 0.1 ml/hr to 1500 ml/hr (model dependent).
• Syringe Compatibility: Supports standard syringes (5 ml, 10 ml, 20 ml, 30 ml, 50/60 ml).
• Infusion Modes: Continuous, bolus, and intermittent infusion.
• Accuracy: ±2% or better.
• Occlusion Pressure: Adjustable (low, medium, high).
• Alarms: Occlusion, syringe empty, near end, battery low, power failure, system error.
• Data Storage: Retains infusion history and settings after power-off.
• Power Supply: AC mains with built-in rechargeable battery (4–6 hours backup).
• Battery Type: Sealed lead-acid or lithium-ion (model dependent).
• Safety Features: Anti-bolus mechanism, password protection, automatic syringe size detection.
• Mounting: Pole clamp or bedside mounting.
• Applications: Suitable for ICU, OT, NICU, emergency care, and ward use.`
  },
  {
    id: 3,
    name: "ECG Machine",
    image: ecgMachine,
    specifications: `• Channels: 3, 6, or 12-channel ECG recording (model dependent).
• Display: High-resolution LCD/TFT screen for waveform preview and patient data.
• Leads: Standard 12-lead ECG acquisition.
• Paper Size: 50 mm or 210 mm thermal paper (model dependent).
• Printing Speed: 5, 10, 25, and 50 mm/s selectable.
• Frequency Response: 0.05 – 150 Hz or higher.
• Sensitivity: 2.5, 5, 10, and 20 mm/mV.
• Input Impedance: ≥ 50 MΩ.
• Filters: AC filter, baseline drift filter, EMG filter for noise reduction.
• Data Storage: Internal memory for ECG reports, USB for data transfer.
• Connectivity: USB, LAN, Wi-Fi (optional) for EMR integration.
• Alarms/Indicators: Lead-off detection, paper out, battery low.
• Power Supply: AC mains with built-in rechargeable battery (≥ 2 hours backup).
• Patient Safety: Meets IEC standards for medical electrical equipment.
• Applications: Hospitals, clinics, diagnostic centers, and ambulances.`
  },
  {
    id: 4,
    name: "Defibrillator",
    image: Defibrillator,
    specifications: `• Type: Biphasic or monophasic (model dependent).
• Energy Range: 1 – 360 Joules (selectable).
• Waveform: Truncated exponential or biphasic waveform.
• Display: High-resolution color TFT/LCD screen for ECG waveform, heart rate, and settings.
• ECG Monitoring: 3-lead or 5-lead ECG monitoring capability.
• Operation Modes: Manual, AED (Automated External Defibrillation), synchronized cardioversion, and pacing (optional).
• Charging Time: ≤ 5 seconds to maximum energy.
• Controls: Energy select, charge, shock buttons (on front panel and paddles).
• Paddles: External adult/paediatric paddles or multifunction defib pads.
• Recording: Built-in thermal printer for ECG and event documentation.
• Alarms: Visual and audible alarms for asystole, ventricular fibrillation, low battery, and system faults.
• Data Storage: Event memory with time-stamped records; USB/SD card export (optional).
• Power Supply: AC mains and rechargeable battery (≥ 3 hours monitoring or ≥ 200 shocks per charge).
• Battery Type: Lithium-ion or sealed lead-acid.
• Standards Compliance: IEC and AAMI safety standards.
• Applications: Emergency rooms, ICUs, ambulances, and field emergency response.`
  },
  {
    id: 5,
    name: "Ventilator",
    image: infusion,
    specifications: `• Type: Microprocessor-controlled, invasive and non-invasive ventilation.
• Display: 7–15 inch color TFT/LCD touchscreen for real-time waveforms, loops, and patient data.
• Ventilation Modes: Volume Control (VCV), Pressure Control (PCV), SIMV, PSV, CPAP, BiPAP, APRV, and standby mode.
• Patient Range: Adult, pediatric, and neonatal (model dependent).
• Tidal Volume Range: 20 – 2000 ml (model dependent).
• Respiratory Rate: 1 – 100 breaths per minute.
• Inspiratory Pressure: 5 – 60 cmH₂O.
• PEEP Range: 0 – 25 cmH₂O.
• FiO₂ Range: 21% – 100%, adjustable.
• Monitoring Parameters: Pressure, flow, volume waveforms, SpO₂ (optional), EtCO₂ (optional).
• Alarms: Visual and audible for high/low pressure, apnea, high/low tidal volume, high/low respiratory rate, FiO₂, and power failure.
• Battery Backup: Internal rechargeable battery (≥ 2 hours).
• Gas Supply: Oxygen and compressed air, 50 psi (3.5 bar).
• Nebulizer: Built-in or optional pneumatic/electronic nebulization.
• Data Storage: Trend data and alarm history.
• Mobility: Compatible with trolley or mobile stand for transport use.
• Applications: ICU, OT, emergency care, transport, and homecare (depending on model).`
  },
  {
    id: 6,
    name: "Infusion Pump",
    image: ventilator,
    specifications: `• Type: Volumetric infusion pump, single or multi-channel (model dependent).
• Display: LCD/LED screen showing flow rate, volume infused, remaining time, and status.
• Flow Rate Range: Typically 0.1 – 1500 ml/hr (model dependent).
• Volume Limit: Programmable total volume to be infused (VTBI).
• Accuracy: ±5% or better.
• Infusion Modes: Continuous, intermittent, KVO (Keep Vein Open).
• Compatible Tubing: Standard IV sets or dedicated disposable sets (model dependent).
• Occlusion Pressure: Adjustable (low, medium, high).
• Alarms: Occlusion, air-in-line, door open, near end, infusion complete, battery low, power failure.
• Data Storage: Infusion history and event logs.
• Power Supply: AC mains with internal rechargeable battery (≥ 4 hours backup).
• Battery Type: Lithium-ion or sealed lead-acid (model dependent).
• Safety Features: Anti-bolus system, free-flow protection, lockable keypad.
• Mounting: Pole clamp or bedside mounting.
• Applications: ICU, OT, NICU, oncology, general wards, and transport.`
  }
];
