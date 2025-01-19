export const open = async (args: string[]): Promise<string> => {
  if (!args.length)
    return 'Usage: open [section]\nAvailable sections: about, projects, blog, contact, resume'

  const section = args[0].toLowerCase()

  // Map sections to their corresponding anchor links
  const sections = {
    about: '#about',
    projects: '#projects',
    blog: '#blog',
    contact: '#contact',
    resume: '#resume',
  }

  if (!(section in sections))
    return `Error: Unknown section "${section}". Type "ls" to see available sections.`

  // Return anchor link
  return `<a href="${sections[section]}">${section}</a>`
}
