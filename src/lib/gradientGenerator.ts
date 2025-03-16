export interface GradientResult {
  backgroundImage: string;
  backgroundPosition: string;
}

/**
 * temporary simple blue gradient
 */
export function generateGradient(): GradientResult {
  return {
    backgroundImage: 'linear-gradient(135deg, #0099F7 0%, #2B32B2 100%)',
    backgroundPosition: '0% 0%'
  };
}
