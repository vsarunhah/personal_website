export const ls = async (_args: string[]): Promise<string> => {
  // Default sections/files to display with descriptions
  const sections = [
    { name: 'about', desc: 'Learn more about me' },
    { name: 'projects', desc: 'View my portfolio projects' },
    { name: 'blog', desc: 'Read my latest blog posts' },
    { name: 'contact', desc: 'Get in touch with me' },
    { name: 'resume', desc: 'View my professional experience' },
  ]

  // Format the output with descriptions
  return sections
    .map(({ name, desc }) => `${name.padEnd(10)}\t${desc}`)
    .join('\n')
}
