export default function HomelabProjects() {
  const projects = [
    {
      title: "Proxmox Virtualization Cluster",
      description: "Self-hosted virtualization environment for running development VMs, testing environments, and containerized applications. Gained hands-on experience with infrastructure management, resource allocation, and VM orchestration.",
      tech: ["Proxmox VE", "KVM", "LXC Containers", "VM Management"],
      skills: ["Virtualization", "Infrastructure Management", "Resource Optimization"]
    },
    {
      title: "TrueNAS Storage Solution",
      description: "Enterprise-grade network-attached storage system for data management, backup solutions, and file sharing. Implemented ZFS for data integrity, snapshots, and redundancy.",
      tech: ["TrueNAS", "ZFS", "NFS", "SMB", "iSCSI"],
      skills: ["Storage Architecture", "Data Management", "Backup Strategies"]
    },
    {
      title: "OPNsense Network Security",
      description: "Custom firewall and routing solution protecting entire home network. Configured VLANs, firewall rules, VPN access, and intrusion detection for comprehensive network security.",
      tech: ["OPNsense", "Firewall Rules", "VLANs", "VPN", "IDS/IPS"],
      skills: ["Network Security", "Routing & Switching", "Security Hardening"]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Homelab & Infrastructure</h2>

      <div className="mb-6 p-6 bg-zinc-50 border border-zinc-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Self-Hosted Infrastructure</h3>
        <p className="text-zinc-600 text-sm leading-relaxed">
          Personal homelab environment demonstrating practical experience with enterprise-grade infrastructure,
          networking, and security concepts. This hands-on experience complements software development skills
          with a deeper understanding of deployment, operations, and system architecture.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
            <p className="text-zinc-600 mb-4">{project.description}</p>

            <div className="mb-4">
              <p className="text-xs font-medium text-zinc-500 mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-zinc-50 text-zinc-600 rounded border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-zinc-500 mb-2">Skills Demonstrated</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
